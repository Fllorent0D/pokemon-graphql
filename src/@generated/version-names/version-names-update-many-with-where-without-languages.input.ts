import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { version_namesScalarWhereInput } from './version-names-scalar-where.input';
import { Type } from 'class-transformer';
import { version_namesUpdateManyMutationInput } from './version-names-update-many-mutation.input';

@InputType()
export class version_namesUpdateManyWithWhereWithoutLanguagesInput {

    @Field(() => version_namesScalarWhereInput, {nullable:false})
    @Type(() => version_namesScalarWhereInput)
    where!: version_namesScalarWhereInput;

    @Field(() => version_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => version_namesUpdateManyMutationInput)
    data!: version_namesUpdateManyMutationInput;
}
