import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersCreateWithoutLocation_areasInput } from './encounters-create-without-location-areas.input';

@InputType()
export class encountersCreateOrConnectWithoutLocation_areasInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersCreateWithoutLocation_areasInput, {nullable:false})
    @Type(() => encountersCreateWithoutLocation_areasInput)
    create!: encountersCreateWithoutLocation_areasInput;
}
