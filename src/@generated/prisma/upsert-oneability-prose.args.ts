import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseWhereUniqueInput } from '../ability-prose/ability-prose-where-unique.input';
import { Type } from 'class-transformer';
import { ability_proseCreateInput } from '../ability-prose/ability-prose-create.input';
import { ability_proseUpdateInput } from '../ability-prose/ability-prose-update.input';

@ArgsType()
export class UpsertOneabilityProseArgs {

    @Field(() => ability_proseWhereUniqueInput, {nullable:false})
    @Type(() => ability_proseWhereUniqueInput)
    where!: ability_proseWhereUniqueInput;

    @Field(() => ability_proseCreateInput, {nullable:false})
    @Type(() => ability_proseCreateInput)
    create!: ability_proseCreateInput;

    @Field(() => ability_proseUpdateInput, {nullable:false})
    @Type(() => ability_proseUpdateInput)
    update!: ability_proseUpdateInput;
}
