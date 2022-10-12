import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereUniqueInput } from '../evolution-trigger-prose/evolution-trigger-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseWhereUniqueInput, {nullable:false})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    where!: evolution_trigger_proseWhereUniqueInput;
}
