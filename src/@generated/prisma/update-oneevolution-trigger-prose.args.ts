import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseUpdateInput } from '../evolution-trigger-prose/evolution-trigger-prose-update.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseWhereUniqueInput } from '../evolution-trigger-prose/evolution-trigger-prose-where-unique.input';

@ArgsType()
export class UpdateOneevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseUpdateInput, {nullable:false})
    @Type(() => evolution_trigger_proseUpdateInput)
    data!: evolution_trigger_proseUpdateInput;

    @Field(() => evolution_trigger_proseWhereUniqueInput, {nullable:false})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    where!: evolution_trigger_proseWhereUniqueInput;
}
