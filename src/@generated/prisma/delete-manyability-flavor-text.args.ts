import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textWhereInput } from '../ability-flavor-text/ability-flavor-text-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyabilityFlavorTextArgs {

    @Field(() => ability_flavor_textWhereInput, {nullable:true})
    @Type(() => ability_flavor_textWhereInput)
    where?: ability_flavor_textWhereInput;
}
