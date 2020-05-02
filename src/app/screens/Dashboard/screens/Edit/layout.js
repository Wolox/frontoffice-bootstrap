import React from 'react';
import { Fields, reduxForm } from 'redux-form';
import { t } from 'i18next';
import ReactSVG from 'react-svg';

import leftArrow from '~assets/left-arrow.svg';

import { Formik, Field } from 'formik';

import styles from './styles.module.scss';

function EditLayout({ modelData = {}, onSubmit, handleCancel, handleDelete, initialValues }) {
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <form className={styles.container}>
        <div className="row middle form-header">
          <button onClick={handleCancel} type="button" className="back-button m-right-2">
            <ReactSVG
              src={leftArrow}
              beforeInjection={svg => {
                svg.classList.add('back-ic');
              }}
            />
          </button>
          <h1 className="title2 capitalize m-right-auto">
            {t('Edit:resourceEdition', { resource: modelData.name })}
          </h1>
          <button type="button" className="button-secondary" onClick={handleDelete}>
            {t('Create:delete')}
          </button>
        </div>
        <div className="form-body">
          {modelData.attributes
            ?.filter(attribute => !modelData.edit || modelData.edit.includes(attribute.name))
            .map(attribute => (
              <Field
                type={attribute.type}
                name={attribute.name}
                key={attribute.name}
                component={attribute.component}
                className="form-field m-bottom-3"
                {...attribute.componentAttributes}
              />
            ))}
        </div>
        <div className="row form-actions">
          <button type="submit" className="m-right-2 button-primary">
            {t('Create:save')}
          </button>
          <button type="button" className="button-secondary" onClick={handleCancel}>
            {t('Create:cancel')}
          </button>
        </div>
      </form>
    </Formik>
  );
}

export default EditLayout;
