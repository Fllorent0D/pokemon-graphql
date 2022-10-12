import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textWhereUniqueInput } from '../ability-flavor-text/ability-flavor-text-where-unique.input';
import { Type } from 'class-transformer';
import { ability_flavor_textCreateInput } from '../ability-flavor-text/ability-flavor-text-create.input';
import { ability_flavor_textUpdateInput } from '../ability-flavor-text/ability-flavor-text-update.input';

@ArgsType()
export class UpsertOneabilityFlavorTextArgs {

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;

    @Field(() => ability_flavor_textCreateInput, {nullable:false})
    @Type(() => ability_flavor_textCreateInput)
    create!: ability_flavor_textCreateInput;

    @Field(() => ability_flavor_textUpdateInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateInput)
    update!: ability_flavor_textUpdateInput;
}
