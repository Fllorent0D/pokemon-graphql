import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_namesWhereUniqueInput } from '../version-names/version-names-where-unique.input';
import { Type } from 'class-transformer';
import { version_namesCreateInput } from '../version-names/version-names-create.input';
import { version_namesUpdateInput } from '../version-names/version-names-update.input';

@ArgsType()
export class UpsertOneversionNamesArgs {

    @Field(() => version_namesWhereUniqueInput, {nullable:false})
    @Type(() => version_namesWhereUniqueInput)
    where!: version_namesWhereUniqueInput;

    @Field(() => version_namesCreateInput, {nullable:false})
    @Type(() => version_namesCreateInput)
    create!: version_namesCreateInput;

    @Field(() => version_namesUpdateInput, {nullable:false})
    @Type(() => version_namesUpdateInput)
    update!: version_namesUpdateInput;
}
