import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textCreateInput } from '../ability-flavor-text/ability-flavor-text-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneabilityFlavorTextArgs {

    @Field(() => ability_flavor_textCreateInput, {nullable:false})
    @Type(() => ability_flavor_textCreateInput)
    data!: ability_flavor_textCreateInput;
}
