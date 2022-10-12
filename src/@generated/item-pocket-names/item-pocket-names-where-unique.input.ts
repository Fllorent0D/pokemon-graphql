import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_pocket_namesItem_pocket_idLocal_language_idCompoundUniqueInput } from './item-pocket-names-item-pocket-id-local-language-id-compound-unique.input';

@InputType()
export class item_pocket_namesWhereUniqueInput {

    @Field(() => item_pocket_namesItem_pocket_idLocal_language_idCompoundUniqueInput, {nullable:true})
    item_pocket_id_local_language_id?: item_pocket_namesItem_pocket_idLocal_language_idCompoundUniqueInput;
}
