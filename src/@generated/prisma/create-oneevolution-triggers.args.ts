import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersCreateInput } from '../evolution-triggers/evolution-triggers-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneevolutionTriggersArgs {

    @Field(() => evolution_triggersCreateInput, {nullable:false})
    @Type(() => evolution_triggersCreateInput)
    data!: evolution_triggersCreateInput;
}
