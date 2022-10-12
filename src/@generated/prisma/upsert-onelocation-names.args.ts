import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_namesWhereUniqueInput } from '../location-names/location-names-where-unique.input';
import { Type } from 'class-transformer';
import { location_namesCreateInput } from '../location-names/location-names-create.input';
import { location_namesUpdateInput } from '../location-names/location-names-update.input';

@ArgsType()
export class UpsertOnelocationNamesArgs {

    @Field(() => location_namesWhereUniqueInput, {nullable:false})
    @Type(() => location_namesWhereUniqueInput)
    where!: location_namesWhereUniqueInput;

    @Field(() => location_namesCreateInput, {nullable:false})
    @Type(() => location_namesCreateInput)
    create!: location_namesCreateInput;

    @Field(() => location_namesUpdateInput, {nullable:false})
    @Type(() => location_namesUpdateInput)
    update!: location_namesUpdateInput;
}
