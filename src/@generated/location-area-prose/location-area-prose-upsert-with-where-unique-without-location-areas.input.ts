import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_area_proseWhereUniqueInput } from './location-area-prose-where-unique.input';
import { Type } from 'class-transformer';
import { location_area_proseUpdateWithoutLocation_areasInput } from './location-area-prose-update-without-location-areas.input';
import { location_area_proseCreateWithoutLocation_areasInput } from './location-area-prose-create-without-location-areas.input';

@InputType()
export class location_area_proseUpsertWithWhereUniqueWithoutLocation_areasInput {

    @Field(() => location_area_proseWhereUniqueInput, {nullable:false})
    @Type(() => location_area_proseWhereUniqueInput)
    where!: location_area_proseWhereUniqueInput;

    @Field(() => location_area_proseUpdateWithoutLocation_areasInput, {nullable:false})
    @Type(() => location_area_proseUpdateWithoutLocation_areasInput)
    update!: location_area_proseUpdateWithoutLocation_areasInput;

    @Field(() => location_area_proseCreateWithoutLocation_areasInput, {nullable:false})
    @Type(() => location_area_proseCreateWithoutLocation_areasInput)
    create!: location_area_proseCreateWithoutLocation_areasInput;
}
