import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textWhereUniqueInput } from '../move-flavor-text/move-flavor-text-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveFlavorTextArgs {

    @Field(() => move_flavor_textWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_textWhereUniqueInput)
    where!: move_flavor_textWhereUniqueInput;
}
