import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseCreateInput } from '../ability-prose/ability-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneabilityProseArgs {

    @Field(() => ability_proseCreateInput, {nullable:false})
    @Type(() => ability_proseCreateInput)
    data!: ability_proseCreateInput;
}
