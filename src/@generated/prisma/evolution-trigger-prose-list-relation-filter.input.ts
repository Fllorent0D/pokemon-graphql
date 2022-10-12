import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_trigger_proseWhereInput } from '../evolution-trigger-prose/evolution-trigger-prose-where.input';

@InputType()
export class Evolution_trigger_proseListRelationFilter {

    @Field(() => evolution_trigger_proseWhereInput, {nullable:true})
    every?: evolution_trigger_proseWhereInput;

    @Field(() => evolution_trigger_proseWhereInput, {nullable:true})
    some?: evolution_trigger_proseWhereInput;

    @Field(() => evolution_trigger_proseWhereInput, {nullable:true})
    none?: evolution_trigger_proseWhereInput;
}
