import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encounter_methodsUpdateManyMutationInput } from '../encounter-methods/encounter-methods-update-many-mutation.input';
import { Type } from 'class-transformer';
import { encounter_methodsWhereInput } from '../encounter-methods/encounter-methods-where.input';

@ArgsType()
export class UpdateManyencounterMethodsArgs {

    @Field(() => encounter_methodsUpdateManyMutationInput, {nullable:false})
    @Type(() => encounter_methodsUpdateManyMutationInput)
    data!: encounter_methodsUpdateManyMutationInput;

    @Field(() => encounter_methodsWhereInput, {nullable:true})
    @Type(() => encounter_methodsWhereInput)
    where?: encounter_methodsWhereInput;
}
