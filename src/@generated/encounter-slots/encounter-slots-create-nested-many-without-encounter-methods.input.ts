import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsCreateWithoutEncounter_methodsInput } from './encounter-slots-create-without-encounter-methods.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateOrConnectWithoutEncounter_methodsInput } from './encounter-slots-create-or-connect-without-encounter-methods.input';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';

@InputType()
export class encounter_slotsCreateNestedManyWithoutEncounter_methodsInput {

    @Field(() => [encounter_slotsCreateWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_slotsCreateWithoutEncounter_methodsInput)
    create?: Array<encounter_slotsCreateWithoutEncounter_methodsInput>;

    @Field(() => [encounter_slotsCreateOrConnectWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_slotsCreateOrConnectWithoutEncounter_methodsInput)
    connectOrCreate?: Array<encounter_slotsCreateOrConnectWithoutEncounter_methodsInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    connect?: Array<encounter_slotsWhereUniqueInput>;
}
