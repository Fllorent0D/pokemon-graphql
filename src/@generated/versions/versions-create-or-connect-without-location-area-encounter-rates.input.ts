import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { versionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { versionsCreateWithoutLocation_area_encounter_ratesInput } from './versions-create-without-location-area-encounter-rates.input';

@InputType()
export class versionsCreateOrConnectWithoutLocation_area_encounter_ratesInput {

    @Field(() => versionsWhereUniqueInput, {nullable:false})
    @Type(() => versionsWhereUniqueInput)
    where!: versionsWhereUniqueInput;

    @Field(() => versionsCreateWithoutLocation_area_encounter_ratesInput, {nullable:false})
    @Type(() => versionsCreateWithoutLocation_area_encounter_ratesInput)
    create!: versionsCreateWithoutLocation_area_encounter_ratesInput;
}
