import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseCreateInput } from '../evolution-trigger-prose/evolution-trigger-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseCreateInput, {nullable:false})
    @Type(() => evolution_trigger_proseCreateInput)
    data!: evolution_trigger_proseCreateInput;
}
