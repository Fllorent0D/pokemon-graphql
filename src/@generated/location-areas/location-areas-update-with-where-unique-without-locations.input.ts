import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';
import { Type } from 'class-transformer';
import { location_areasUpdateWithoutLocationsInput } from './location-areas-update-without-locations.input';

@InputType()
export class location_areasUpdateWithWhereUniqueWithoutLocationsInput {

    @Field(() => location_areasWhereUniqueInput, {nullable:false})
    @Type(() => location_areasWhereUniqueInput)
    where!: location_areasWhereUniqueInput;

    @Field(() => location_areasUpdateWithoutLocationsInput, {nullable:false})
    @Type(() => location_areasUpdateWithoutLocationsInput)
    data!: location_areasUpdateWithoutLocationsInput;
}
