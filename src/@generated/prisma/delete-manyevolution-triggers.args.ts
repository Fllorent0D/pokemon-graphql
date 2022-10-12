import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { evolution_triggersWhereInput } from '../evolution-triggers/evolution-triggers-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyevolutionTriggersArgs {

    @Field(() => evolution_triggersWhereInput, {nullable:true})
    @Type(() => evolution_triggersWhereInput)
    where?: evolution_triggersWhereInput;
}
