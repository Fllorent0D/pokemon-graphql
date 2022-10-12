import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textWhereInput } from '../move-flavor-text/move-flavor-text-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveFlavorTextArgs {

    @Field(() => move_flavor_textWhereInput, {nullable:true})
    @Type(() => move_flavor_textWhereInput)
    where?: move_flavor_textWhereInput;
}
