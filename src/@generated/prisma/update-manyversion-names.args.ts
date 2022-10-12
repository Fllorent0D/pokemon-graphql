import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesUpdateManyMutationInput } from '../version-names/version-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { version_namesWhereInput } from '../version-names/version-names-where.input';

@ArgsType()
export class UpdateManyversionNamesArgs {

    @Field(() => version_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => version_namesUpdateManyMutationInput)
    data!: version_namesUpdateManyMutationInput;

    @Field(() => version_namesWhereInput, {nullable:true})
    @Type(() => version_namesWhereInput)
    where?: version_namesWhereInput;
}
