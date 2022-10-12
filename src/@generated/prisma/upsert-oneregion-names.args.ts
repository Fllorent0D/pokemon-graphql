import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { region_namesWhereUniqueInput } from '../region-names/region-names-where-unique.input';
import { Type } from 'class-transformer';
import { region_namesCreateInput } from '../region-names/region-names-create.input';
import { region_namesUpdateInput } from '../region-names/region-names-update.input';

@ArgsType()
export class UpsertOneregionNamesArgs {

    @Field(() => region_namesWhereUniqueInput, {nullable:false})
    @Type(() => region_namesWhereUniqueInput)
    where!: region_namesWhereUniqueInput;

    @Field(() => region_namesCreateInput, {nullable:false})
    @Type(() => region_namesCreateInput)
    create!: region_namesCreateInput;

    @Field(() => region_namesUpdateInput, {nullable:false})
    @Type(() => region_namesUpdateInput)
    update!: region_namesUpdateInput;
}
