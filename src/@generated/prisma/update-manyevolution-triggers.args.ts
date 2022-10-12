import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersUpdateManyMutationInput } from '../evolution-triggers/evolution-triggers-update-many-mutation.input';
import { Type } from 'class-transformer';
import { evolution_triggersWhereInput } from '../evolution-triggers/evolution-triggers-where.input';

@ArgsType()
export class UpdateManyevolutionTriggersArgs {

    @Field(() => evolution_triggersUpdateManyMutationInput, {nullable:false})
    @Type(() => evolution_triggersUpdateManyMutationInput)
    data!: evolution_triggersUpdateManyMutationInput;

    @Field(() => evolution_triggersWhereInput, {nullable:true})
    @Type(() => evolution_triggersWhereInput)
    where?: evolution_triggersWhereInput;
}
