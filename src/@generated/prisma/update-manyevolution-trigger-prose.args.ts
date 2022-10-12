import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_trigger_proseUpdateManyMutationInput } from '../evolution-trigger-prose/evolution-trigger-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { evolution_trigger_proseWhereInput } from '../evolution-trigger-prose/evolution-trigger-prose-where.input';

@ArgsType()
export class UpdateManyevolutionTriggerProseArgs {

    @Field(() => evolution_trigger_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => evolution_trigger_proseUpdateManyMutationInput)
    data!: evolution_trigger_proseUpdateManyMutationInput;

    @Field(() => evolution_trigger_proseWhereInput, {nullable:true})
    @Type(() => evolution_trigger_proseWhereInput)
    where?: evolution_trigger_proseWhereInput;
}
