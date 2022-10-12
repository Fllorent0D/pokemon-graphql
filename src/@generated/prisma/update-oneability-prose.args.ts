import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseUpdateInput } from '../ability-prose/ability-prose-update.input';
import { Type } from 'class-transformer';
import { ability_proseWhereUniqueInput } from '../ability-prose/ability-prose-where-unique.input';

@ArgsType()
export class UpdateOneabilityProseArgs {

    @Field(() => ability_proseUpdateInput, {nullable:false})
    @Type(() => ability_proseUpdateInput)
    data!: ability_proseUpdateInput;

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;
}
