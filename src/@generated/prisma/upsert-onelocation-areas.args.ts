import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasWhereUniqueInput } from '../location-areas/location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { location_areasCreateInput } from '../location-areas/location-areas-create.input';
import { location_areasUpdateInput } from '../location-areas/location-areas-update.input';

@ArgsType()
export class UpsertOnelocationAreasArgs {

    @Field(() => location_areasWhereUniqueInput, {nullable:false})
    @Type(() => location_areasWhereUniqueInput)
    where!: location_areasWhereUniqueInput;

    @Field(() => location_areasCreateInput, {nullable:false})
    @Type(() => location_areasCreateInput)
    create!: location_areasCreateInput;

    @Field(() => location_areasUpdateInput, {nullable:false})
    @Type(() => location_areasUpdateInput)
    update!: location_areasUpdateInput;
}
