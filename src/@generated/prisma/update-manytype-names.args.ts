import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesUpdateManyMutationInput } from '../type-names/type-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { type_namesWhereInput } from '../type-names/type-names-where.input';

@ArgsType()
export class UpdateManytypeNamesArgs {

    @Field(() => type_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => type_namesUpdateManyMutationInput)
    data!: type_namesUpdateManyMutationInput;

    @Field(() => type_namesWhereInput, {nullable:true})
    @Type(() => type_namesWhereInput)
    where?: type_namesWhereInput;
}
