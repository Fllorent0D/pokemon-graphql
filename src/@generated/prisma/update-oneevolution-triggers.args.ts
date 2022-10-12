import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersUpdateInput } from '../evolution-triggers/evolution-triggers-update.input';
import { Type } from 'class-transformer';
import { evolution_triggersWhereUniqueInput } from '../evolution-triggers/evolution-triggers-where-unique.input';

@ArgsType()
export class UpdateOneevolutionTriggersArgs {

    @Field(() => evolution_triggersUpdateInput, {nullable:false})
    @Type(() => evolution_triggersUpdateInput)
    data!: evolution_triggersUpdateInput;

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:false})
    @Type(() => evolution_triggersWhereUniqueInput)
    where!: evolution_triggersWhereUniqueInput;
}
