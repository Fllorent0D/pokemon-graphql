import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersUpdateWithoutLocation_areasInput } from './encounters-update-without-location-areas.input';

@InputType()
export class encountersUpdateWithWhereUniqueWithoutLocation_areasInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutLocation_areasInput, {nullable:false})
    @Type(() => encountersUpdateWithoutLocation_areasInput)
    data!: encountersUpdateWithoutLocation_areasInput;
}
