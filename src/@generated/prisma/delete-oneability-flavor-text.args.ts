import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textWhereUniqueInput } from '../ability-flavor-text/ability-flavor-text-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneabilityFlavorTextArgs {

    @Field(() => ability_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => ability_flavor_textWhereUniqueInput)
    where!: ability_flavor_textWhereUniqueInput;
}
