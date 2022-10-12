import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_triggersWhereInput } from '../evolution-triggers/evolution-triggers-where.input';

@InputType()
export class Evolution_triggersRelationFilter {

    @Field(() => evolution_triggersWhereInput, {nullable:true})
    is?: evolution_triggersWhereInput;

    @Field(() => evolution_triggersWhereInput, {nullable:true})
    isNot?: evolution_triggersWhereInput;
}
