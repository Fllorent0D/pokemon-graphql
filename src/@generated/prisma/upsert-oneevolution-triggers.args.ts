import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersWhereUniqueInput } from '../evolution-triggers/evolution-triggers-where-unique.input';
import { Type } from 'class-transformer';
import { evolution_triggersCreateInput } from '../evolution-triggers/evolution-triggers-create.input';
import { evolution_triggersUpdateInput } from '../evolution-triggers/evolution-triggers-update.input';

@ArgsType()
export class UpsertOneevolutionTriggersArgs {

    @Field(() => evolution_triggersWhereUniqueInput, {nullable:false})
    @Type(() => evolution_triggersWhereUniqueInput)
    where!: evolution_triggersWhereUniqueInput;

    @Field(() => evolution_triggersCreateInput, {nullable:false})
    @Type(() => evolution_triggersCreateInput)
    create!: evolution_triggersCreateInput;

    @Field(() => evolution_triggersUpdateInput, {nullable:false})
    @Type(() => evolution_triggersUpdateInput)
    update!: evolution_triggersUpdateInput;
}
