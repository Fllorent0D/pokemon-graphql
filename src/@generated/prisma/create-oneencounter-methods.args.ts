import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsCreateInput } from '../encounter-methods/encounter-methods-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneencounterMethodsArgs {

    @Field(() => encounter_methodsCreateInput, {nullable:false})
    @Type(() => encounter_methodsCreateInput)
    data!: encounter_methodsCreateInput;
}
