import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { type_namesWhereUniqueInput } from '../type-names/type-names-where-unique.input';
import { Type } from 'class-transformer';
import { type_namesCreateInput } from '../type-names/type-names-create.input';
import { type_namesUpdateInput } from '../type-names/type-names-update.input';

@ArgsType()
export class UpsertOnetypeNamesArgs {

    @Field(() => type_namesWhereUniqueInput, {nullable:false})
    @Type(() => type_namesWhereUniqueInput)
    where!: type_namesWhereUniqueInput;

    @Field(() => type_namesCreateInput, {nullable:false})
    @Type(() => type_namesCreateInput)
    create!: type_namesCreateInput;

    @Field(() => type_namesUpdateInput, {nullable:false})
    @Type(() => type_namesUpdateInput)
    update!: type_namesUpdateInput;
}
