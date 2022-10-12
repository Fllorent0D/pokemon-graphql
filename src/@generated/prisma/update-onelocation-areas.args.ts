import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { location_areasUpdateInput } from '../location-areas/location-areas-update.input';
import { Type } from 'class-transformer';
import { location_areasWhereUniqueInput } from '../location-areas/location-areas-where-unique.input';

@ArgsType()
export class UpdateOnelocationAreasArgs {

    @Field(() => location_areasUpdateInput, {nullable:false})
    @Type(() => location_areasUpdateInput)
    data!: location_areasUpdateInput;

    @Field(() => location_areasWhereUniqueInput, {nullable:false})
    @Type(() => location_areasWhereUniqueInput)
    where!: location_areasWhereUniqueInput;
}
