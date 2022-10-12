import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseWhereUniqueInput } from '../ability-prose/ability-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneabilityProseArgs {

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;
}
