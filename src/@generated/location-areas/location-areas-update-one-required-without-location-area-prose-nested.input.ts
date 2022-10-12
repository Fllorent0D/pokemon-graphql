import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { location_areasCreateWithoutLocation_area_proseInput } from './location-areas-create-without-location-area-prose.input';
import { Type } from 'class-transformer';
import { location_areasCreateOrConnectWithoutLocation_area_proseInput } from './location-areas-create-or-connect-without-location-area-prose.input';
import { location_areasUpsertWithoutLocation_area_proseInput } from './location-areas-upsert-without-location-area-prose.input';
import { location_areasWhereUniqueInput } from './location-areas-where-unique.input';
import { location_areasUpdateWithoutLocation_area_proseInput } from './location-areas-update-without-location-area-prose.input';

@InputType()
export class location_areasUpdateOneRequiredWithoutLocation_area_proseNestedInput {

    @Field(() => location_areasCreateWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => location_areasCreateWithoutLocation_area_proseInput)
    create?: location_areasCreateWithoutLocation_area_proseInput;

    @Field(() => location_areasCreateOrConnectWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => location_areasCreateOrConnectWithoutLocation_area_proseInput)
    connectOrCreate?: location_areasCreateOrConnectWithoutLocation_area_proseInput;

    @Field(() => location_areasUpsertWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => location_areasUpsertWithoutLocation_area_proseInput)
    upsert?: location_areasUpsertWithoutLocation_area_proseInput;

    @Field(() => location_areasWhereUniqueInput, {nullable:true})
    @Type(() => location_areasWhereUniqueInput)
    connect?: location_areasWhereUniqueInput;

    @Field(() => location_areasUpdateWithoutLocation_area_proseInput, {nullable:true})
    @Type(() => location_areasUpdateWithoutLocation_area_proseInput)
    update?: location_areasUpdateWithoutLocation_area_proseInput;
}
