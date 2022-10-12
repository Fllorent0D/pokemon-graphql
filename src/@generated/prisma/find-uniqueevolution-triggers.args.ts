import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersWhereUniqueInput } from '../evolution-triggers/evolution-triggers-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueevolutionTriggersArgs {

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:false})
    @Type(() => evolution_triggersWhereUniqueInput)
    where!: evolution_triggersWhereUniqueInput;
}
