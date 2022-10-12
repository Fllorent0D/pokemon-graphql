import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textUpdateManyMutationInput } from '../ability-flavor-text/ability-flavor-text-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ability_flavor_textWhereInput } from '../ability-flavor-text/ability-flavor-text-where.input';

@ArgsType()
export class UpdateManyabilityFlavorTextArgs {

    @Field(() => ability_flavor_textUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_flavor_textUpdateManyMutationInput)
    data!: ability_flavor_textUpdateManyMutationInput;

    @Field(() => ability_flavor_textWhereInput, {nullable:true})
    @Type(() => ability_flavor_textWhereInput)
    where?: ability_flavor_textWhereInput;
}
