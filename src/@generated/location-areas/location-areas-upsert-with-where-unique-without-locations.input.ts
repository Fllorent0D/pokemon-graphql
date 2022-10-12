import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { location_areasUpdateWithoutLocationsInput } from './location-areas-update-without-locations.input';
import { location_areasCreateWithoutLocationsInput } from './location-areas-create-without-locations.input';

@InputType()
export class location_areasUpsertWithWhereUniqueWithoutLocationsInput {

    @Field(() => location_areasWhereUniqueInput, {nullable:false})
    @Type(() => location_areasWhereUniqueInput)
    where!: location_areasWhereUniqueInput;

    @Field(() => location_areasUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => location_areasUpdateWithoutLocationsInput)
    update!: location_areasUpdateWithoutLocationsInput;

    @Field(() => location_areasCreateWithoutLocationsInput, {nullable:false})
    @Type(() => location_areasCreateWithoutLocationsInput)
    create!: location_areasCreateWithoutLocationsInput;
}
