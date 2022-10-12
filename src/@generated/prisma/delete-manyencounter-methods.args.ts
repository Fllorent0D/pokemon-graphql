import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsWhereInput } from '../encounter-methods/encounter-methods-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencounterMethodsArgs {

    @Field(() => encounter_methodsWhereInput, {nullable:true})
    @Type(() => encounter_methodsWhereInput)
    where?: encounter_methodsWhereInput;
}
