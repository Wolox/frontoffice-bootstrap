import React from 'react';
import { t } from 'i18next';
import { Formik, Field } from 'formik';

import leftArrow from '~assets/left-arrow.svg';

import Icon from '~components/Icon';

import styles from './styles.module.scss';

function CreationLayout({ modelData, handleSubmit, handleCancel }) {
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className="row middle start form-header">
        <button onClick={handleCancel} type="button" className="back-button m-right-2">
          <Icon src={leftArrow} classList={['back-ic']} />
        </button>
        <h1 className="title2 capitalize">{t('Create:resourceCreation', { resource: modelData.name })}</h1>
      </div>
      <div className="form-body">
        {modelData.attributes &&
          modelData.attributes
            .filter(attribute => !modelData.create || modelData.create.includes(attribute.name))
            .map(attribute => (
              <Field
                key={attribute.name}
                className="form-field m-bottom-3"
                {...attribute.componentAttributes}
                component={attribute.component}
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
  );
}

export default CreationLayout;
