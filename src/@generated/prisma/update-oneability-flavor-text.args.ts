import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textUpdateInput } from '../ability-flavor-text/ability-flavor-text-update.input';
import { Type } from 'class-transformer';
import { ability_flavor_textWhereUniqueInput } from '../ability-flavor-text/ability-flavor-text-where-unique.input';

@ArgsType()
export class UpdateOneabilityFlavorTextArgs {

    @Field(() => ability_flavor_textUpdateInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateInput)
    data!: ability_flavor_textUpdateInput;

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;
}
