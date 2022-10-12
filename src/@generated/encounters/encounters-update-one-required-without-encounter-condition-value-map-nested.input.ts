import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutEncounter_condition_value_mapInput } from './encounters-create-without-encounter-condition-value-map.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutEncounter_condition_value_mapInput } from './encounters-create-or-connect-without-encounter-condition-value-map.input';
import { encountersUpsertWithoutEncounter_condition_value_mapInput } from './encounters-upsert-without-encounter-condition-value-map.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { encountersUpdateWithoutEncounter_condition_value_mapInput } from './encounters-update-without-encounter-condition-value-map.input';

@InputType()
export class encountersUpdateOneRequiredWithoutEncounter_condition_value_mapNestedInput {

    @Field(() => encountersCreateWithoutEncounter_condition_value_mapInput, {nullable:true})
    @Type(() => encountersCreateWithoutEncounter_condition_value_mapInput)
    create?: encountersCreateWithoutEncounter_condition_value_mapInput;

    @Field(() => encountersCreateOrConnectWithoutEncounter_condition_value_mapInput, {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutEncounter_condition_value_mapInput)
    connectOrCreate?: encountersCreateOrConnectWithoutEncounter_condition_value_mapInput;

    @Field(() => encountersUpsertWithoutEncounter_condition_value_mapInput, {nullable:true})
    @Type(() => encountersUpsertWithoutEncounter_condition_value_mapInput)
    upsert?: encountersUpsertWithoutEncounter_condition_value_mapInput;

    @Field(() => encountersWhereUniqueInput, {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: encountersWhereUniqueInput;

    @Field(() => encountersUpdateWithoutEncounter_condition_value_mapInput, {nullable:true})
    @Type(() => encountersUpdateWithoutEncounter_condition_value_mapInput)
    update?: encountersUpdateWithoutEncounter_condition_value_mapInput;
}
