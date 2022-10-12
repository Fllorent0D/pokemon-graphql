import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { generation_namesWhereUniqueInput } from '../generation-names/generation-names-where-unique.input';
import { Type } from 'class-transformer';
import { generation_namesCreateInput } from '../generation-names/generation-names-create.input';
import { generation_namesUpdateInput } from '../generation-names/generation-names-update.input';

@ArgsType()
export class UpsertOnegenerationNamesArgs {

    @Field(() => generation_namesWhereUniqueInput, {nullable:false})
    @Type(() => generation_namesWhereUniqueInput)
    where!: generation_namesWhereUniqueInput;

    @Field(() => generation_namesCreateInput, {nullable:false})
    @Type(() => generation_namesCreateInput)
    create!: generation_namesCreateInput;

    @Field(() => generation_namesUpdateInput, {nullable:false})
    @Type(() => generation_namesUpdateInput)
    update!: generation_namesUpdateInput;
}
