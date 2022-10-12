import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { encountersCreateWithoutEncounter_condition_value_mapInput } from './encounters-create-without-encounter-condition-value-map.input';

@InputType()
export class encountersCreateOrConnectWithoutEncounter_condition_value_mapInput {

    @Field(() => encountersWhereUniqueInput, {nullable:false})
    @Type(() => encountersWhereUniqueInput)
    where!: encountersWhereUniqueInput;

    @Field(() => encountersCreateWithoutEncounter_condition_value_mapInput, {nullable:false})
    @Type(() => encountersCreateWithoutEncounter_condition_value_mapInput)
    create!: encountersCreateWithoutEncounter_condition_value_mapInput;
}
