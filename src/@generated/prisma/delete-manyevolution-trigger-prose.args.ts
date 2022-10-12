import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereInput } from '../evolution-trigger-prose/evolution-trigger-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseWhereInput, {nullable:true})
    @Type(() => evolution_trigger_proseWhereInput)
    where?: evolution_trigger_proseWhereInput;
}
