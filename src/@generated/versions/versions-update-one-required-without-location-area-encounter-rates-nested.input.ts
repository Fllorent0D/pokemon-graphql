import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsCreateWithoutLocation_area_encounter_ratesInput } from './versions-create-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { versionsCreateOrConnectWithoutLocation_area_encounter_ratesInput } from './versions-create-or-connect-without-location-area-encounter-rates.input';
import { versionsUpsertWithoutLocation_area_encounter_ratesInput } from './versions-upsert-without-location-area-encounter-rates.input';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { versionsUpdateWithoutLocation_area_encounter_ratesInput } from './versions-update-without-location-area-encounter-rates.input';

@InputType()
export class versionsUpdateOneRequiredWithoutLocation_area_encounter_ratesNestedInput {

    @Field(() => versionsCreateWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => versionsCreateWithoutLocation_area_encounter_ratesInput)
    create?: versionsCreateWithoutLocation_area_encounter_ratesInput;

    @Field(() => versionsCreateOrConnectWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => versionsCreateOrConnectWithoutLocation_area_encounter_ratesInput)
    connectOrCreate?: versionsCreateOrConnectWithoutLocation_area_encounter_ratesInput;

    @Field(() => versionsUpsertWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => versionsUpsertWithoutLocation_area_encounter_ratesInput)
    upsert?: versionsUpsertWithoutLocation_area_encounter_ratesInput;

    @Field(() => versionsWhereUniqueInput, {nullable:true})
    @Type(() => versionsWhereUniqueInput)
    connect?: versionsWhereUniqueInput;

    @Field(() => versionsUpdateWithoutLocation_area_encounter_ratesInput, {nullable:true})
    @Type(() => versionsUpdateWithoutLocation_area_encounter_ratesInput)
    update?: versionsUpdateWithoutLocation_area_encounter_ratesInput;
}
