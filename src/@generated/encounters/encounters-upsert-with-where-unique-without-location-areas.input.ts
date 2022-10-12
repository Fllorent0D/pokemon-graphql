import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersUpdateWithoutLocation_areasInput } from './encounters-update-without-location-areas.input';
import { encountersCreateWithoutLocation_areasInput } from './encounters-create-without-location-areas.input';

@InputType()
export class encountersUpsertWithWhereUniqueWithoutLocation_areasInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutLocation_areasInput, {nullable:false})
    @Type(() => encountersUpdateWithoutLocation_areasInput)
    update!: encountersUpdateWithoutLocation_areasInput;

    @Field(() => encountersCreateWithoutLocation_areasInput, {nullable:false})
    @Type(() => encountersCreateWithoutLocation_areasInput)
    create!: encountersCreateWithoutLocation_areasInput;
}
