import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereUniqueInput } from '../evolution-trigger-prose/evolution-trigger-prose-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseCreateInput } from '../evolution-trigger-prose/evolution-trigger-prose-create.input';
import { evolution_trigger_proseUpdateInput } from '../evolution-trigger-prose/evolution-trigger-prose-update.input';

@ArgsType()
export class UpsertOneevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseWhereUniqueInput, {nullable:false})
    @Type(() => evolution_trigger_proseWhereUniqueInput)
    where!: evolution_trigger_proseWhereUniqueInput;

    @Field(() => evolution_trigger_proseCreateInput, {nullable:false})
    @Type(() => evolution_trigger_proseCreateInput)
    create!: evolution_trigger_proseCreateInput;

    @Field(() => evolution_trigger_proseUpdateInput, {nullable:false})
    @Type(() => evolution_trigger_proseUpdateInput)
    update!: evolution_trigger_proseUpdateInput;
}
