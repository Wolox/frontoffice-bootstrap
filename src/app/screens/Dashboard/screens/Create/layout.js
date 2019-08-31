import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { t } from 'i18next';

import leftArrow from '~assets/left-arrow.svg';

import styles from './styles.module.scss';

function CreationLayout({ modelData, handleSubmit, handleCancel, handleDelete }) {
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className="row full-width space-between middle">
        <div className="row">
          <button onClick={handleCancel} type="button">
            <img src={leftArrow} height="20px" />
          </button>
          <h1 className="title m-bottom-1 m-left-1 capitalize">
            {t('Create:resourceCreation', { resource: modelData.name })}
          </h1>
        </div>
        <button type="button" className="m-right-1 button-secondary m-bottom-1" onClick={handleDelete}>
          {t('Create:delete')}
        </button>
      </div>
      {modelData.attributes &&
        modelData.attributes.map(attribute => (
          <Field
            key={attribute.name}
            className="input"
            component="input"
            placeholder={attribute.name}
            {...attribute}
          />
        ))}
      <div className="full-width row end">
        <button type="button" className="m-right-1 m-top-1 button-secondary" onClick={handleCancel}>
          {t('Create:cancel')}
        </button>
        <button type="submit" className="m-right-1 m-top-1 button-primary">
          {t('Create:save')}
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'creation'
})(CreationLayout);
